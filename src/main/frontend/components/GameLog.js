import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import {green600, red600} from 'material-ui/styles/colors';

class GameLog extends Component{

    constructor(props){
        super(props)
    }

    render(){

        let logList = [];
        this.props.pointList.forEach(function (obj, i) {
            let Icon = Cancel;
            let color = red600;
            if(obj.isActive){
                Icon = ActionCheckCircle;
                color = green600;
            }
            const item =
                <TableRow key  = {i}>
                    <TableRowColumn style={{width: '25%'}}>{obj.description}</TableRowColumn>
                    <TableRowColumn style={{width: '7%'}}>{obj.score}</TableRowColumn>
                    <TableRowColumn style={{width: '7%'}}><Icon color={color}/></TableRowColumn>
                </TableRow>;logList.push(item);
        });

        return(
            <div className="gameLog">
                <Table style={{width: '95%'}} selectable = {false}>
                    <TableHeader adjustForCheckbox = {false} displaySelectAll = {false}>
                        <TableRow displayBorder={false}>
                            <TableHeaderColumn style={{width: '25%'}}>Beskrivelse</TableHeaderColumn>
                            <TableHeaderColumn style={{width: '7%'}}>Poeng</TableHeaderColumn>
                            <TableHeaderColumn style={{width: '7%'}}>Status</TableHeaderColumn>
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