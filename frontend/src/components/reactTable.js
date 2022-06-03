import {useTable, useSortBy, usePagination} from 'react-table';
import {Table, Button, Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

export default function ReactTable ({ columns, data, initialState }) {
  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, page, prepareRow, canPreviousPage,
    canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, state: { pageIndex }, } = useTable({
    columns,
    data,
    initialState: initialState,
  }, useSortBy, usePagination)

  return (
    <Container>
      <Table striped bordered hover size="sm" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, index) => <td key={index} {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
        {footerGroups.map((group, i) => (
            <tr key={i} {...group.getFooterGroupProps()}>
              {group.headers.map((column, index) => (
                  <td key={index} {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
        ))}
        </tfoot>
      </Table>
      <Row className="justify-content-center">
        <Col sm="auto">
          <Button variant="secondary" size="sm" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </Button>{' '}
          <Button variant="secondary" size="sm" onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </Button>{' '}
          <span>
          Page{' '}
            <input
              type="number"
              value={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
            />{' '}
                    of {pageOptions.length}
          </span>{' '}
          <Button variant="secondary" size="sm" onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </Button>{' '}
          <Button variant="secondary" size="sm" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
ReactTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  initialState: PropTypes.object,
}
