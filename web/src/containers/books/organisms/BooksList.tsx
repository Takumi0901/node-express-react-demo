import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { booksEnhancer, Props } from '../enhancers/Books'

const CounterActions: React.SFC<Props> = props => {
  return (
    <Paper elevation={0}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.books.list.map((e, key) => (
            <TableRow key={key}>
              <TableCell>{e.id}</TableCell>
              <TableCell>{e.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default booksEnhancer(CounterActions)
