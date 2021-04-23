import React, { useContext, useEffect, useState } from 'react'
import { ExpenseTrackerContext } from '../../context/context'
import { v4 as uuidv4 } from 'uuid'
import useStyles from './styles'
import { incomeCategories, expenseCategories } from '../../constants/categories'
import formatDate from '../../utils/formatDate'
import { useSpeechContext } from '@speechly/react-client'
import CustomizedSnackbar from '../Snackbar/Snackbar'
import { GridItem, GridContainer } from '../Grid'
import { MenuItem, Typography } from '@material-ui/core'
import { Button, FormControl, InputLabel, TextField } from '@material-ui/core'
import { Select } from '@material-ui/core'

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date())
}

const Form = () => {
  const classes = useStyles()

  const [formData, setFormData] = useState(initialState)
  const { addTransaction } = useContext(ExpenseTrackerContext)

  const { segment } = useSpeechContext()

  const selectedCategory =
    formData.type === 'Income' ? incomeCategories : expenseCategories

  const createTransaction = () => {
    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-'))
      return
    // Modify the state by adding id
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4()
    }

    setOpen(true)
    addTransaction(transaction)
    setFormData(initialState)
  }

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === 'add_expense') {
        setFormData({ ...formData, type: 'Expense' })
      } else if (segment.intent.intent === 'add_income') {
        setFormData({ ...formData, type: 'Income' })
      } else if (
        segment.isFinal &&
        segment.intent.intent === 'create_transation'
      ) {
        return createTransaction()
      } else if (
        segment.isFinal &&
        segment.intent.intent === 'cancel_transaction'
      ) {
        return setFormData(initialState)
      }
      segment.entities.forEach((e) => {
        const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`
        switch (e.type) {
          case 'amount':
            setFormData({ ...formData, amount: e.value })
            break
          case 'category':
            if (incomeCategories.map((iC) => iC.type).includes(category)) {
              setFormData({ ...formData, type: 'Income', category })
            } else if (
              expenseCategories.map((eC) => eC.type).includes(category)
            ) {
              setFormData({ ...formData, type: 'Expense', category })
            }
            setFormData({ ...formData, category: category })
            break
          case 'date':
            setFormData({ ...formData, date: e.value })
            break
          default:
            break
        }
      })
      if (
        segment.isFinal &&
        formData.amount &&
        formData.category &&
        formData.type &&
        formData.date
      ) {
        createTransaction()
      }
    }
  }, [segment])

  return (
    <>
      <GridContainer>
        <CustomizedSnackbar open={open} setOpen={setOpen} />

        <GridItem xs={6}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <MenuItem value='Income'>Income</MenuItem>
              <MenuItem value='Expense'>Expense</MenuItem>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem xs={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              {selectedCategory.map((item) => (
                <MenuItem key={item.type} value={item.type}>
                  {item.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>
        <GridItem xs={6}>
          <TextField
            type='number'
            label='Enter Amount'
            fullWidth
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </GridItem>
        <GridItem xs={6}>
          <TextField
            type='date'
            label='Date'
            fullWidth
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: formatDate(e.target.value) })
            }
          />
        </GridItem>
        <Button
          className={classes.button}
          variant='outlined'
          color='primary'
          onClick={createTransaction}
        >
          Create
        </Button>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <GridItem xs={12}>
            <Typography>
              {segment && segment.words.map((item) => item.value.join('.'))}
            </Typography>
          </GridItem>
        </GridItem>
      </GridContainer>
    </>
  )
}

export default Form
