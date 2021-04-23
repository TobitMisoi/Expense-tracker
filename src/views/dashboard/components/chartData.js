import React from 'react'
import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2'
import useTransactions from '../../../useTransactions'

const Chart = ({ title }) => {
  const { chartData } = useTransactions(title)

  return <Doughnut data={chartData} />
}

Chart.propTypes = {
  title: PropTypes.string
}

export default Chart
