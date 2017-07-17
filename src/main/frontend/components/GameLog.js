import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';


class GameLog extends Component{

    constructor(props){
        super(props)
    }

    render(){

        let logList = [];
        this.props.pointList.forEach(function (obj, i) {
            let Icon = Cancel;
            if(obj.isActive){
                Icon = ActionCheckCircle;
            }
            const item =
                <TableRow key  = {i}>
                    <TableRowColumn>{obj.description}</TableRowColumn>
                    <TableRowColumn>{obj.score}</TableRowColumn>
                    <TableRowColumn><Icon/></TableRowColumn>
                </TableRow>;logList.push(item);
        });

        return(
            <div className="gameLog">
                <Table selectable = {false}>
                    <TableHeader adjustForCheckbox = {false} displaySelectAll = {false}>
                        <TableRow>
                            <TableHeaderColumn>Beskrivelse</TableHeaderColumn>
                            <TableHeaderColumn>Poeng</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox = {false}>
                        {logList}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default GameLog;