import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';


const AdminTable = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>E-Mail</TableHeaderColumn>
                <TableHeaderColumn>Digital</TableHeaderColumn>
                <TableHeaderColumn>Abzüge</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>john.smith@gmail.com</TableRowColumn>
                <TableRowColumn>10</TableRowColumn>
                <TableRowColumn>1</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>randalwhite@hotmail.de</TableRowColumn>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn>7</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                <TableRowColumn>stephanies@outlook.com</TableRowColumn>
                <TableRowColumn>15</TableRowColumn>
                <TableRowColumn>0</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn>Steve Brown</TableRowColumn>
                <TableRowColumn>stevvy@brown.com</TableRowColumn>
                <TableRowColumn>9</TableRowColumn>
                <TableRowColumn>2</TableRowColumn>
            </TableRow>
        </TableBody>
        <TableFooter adjustForCheckbox={true}>
            <TableRow>
                <TableHeaderColumn/>
                <TableHeaderColumn/>
                <TableHeaderColumn/>
                <TableHeaderColumn>930</TableHeaderColumn>
                <TableHeaderColumn>300</TableHeaderColumn>
            </TableRow>
        </TableFooter>
    </Table>
);

export default AdminTable;