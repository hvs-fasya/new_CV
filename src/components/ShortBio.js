import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
// import TextField from 'material-ui/TextField';
	
const styles = {
	titlesStyle: {
		fontWeight: 'bold',
		width: 'auto',
		fontSize: 'medium',
		height: 'auto',
		verticalAlign: 'top',
		paddingTop: '15px',
		// width: '30%',
		whiteSpace: 'normal'
	},
	textsStyle: {
		width: 'auto',
		fontSize: 'medium',
		height: 'auto',
		verticalAlign: 'top',
		paddingTop: '15px',
		whiteSpace: 'normal'
	},
	containerStyle: {
      paddingTop: '30px',
      fontSize: 'medium',
	  marginTop: '50px'
    },
    paperStyle: {
		width: '40%',
		height: 'auto',
		marginLeft: '5%'
    },
    imgStyle: {
		width: '90%',
		height: '80%'
    },
    imgDialogStyle: {
		textAlign: 'right'
    },
};


class ShortBio extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
		open: false,
		fixedHeader: true,
	    stripedRows: false,
	    showRowHover: true,
	    selectable: true,
	    multiSelectable: false,
	    enableSelectAll: false,
	    deselectOnClickaway: true,
	    showCheckboxes: false,
	    height: '300px',
	  };
    };

	handleOpen = () => {
	    this.setState({open: true});
	  };

	handleClose = () => {
	    this.setState({open: false});
	  };
  	

    render() {

	let fio=this.props.lang === 'en' ? "Tolkacheva Elena" : "Толкачева Елена Олеговна";
	let edu=this.props.lang === 'en' ? "Education:" : "Образование:";
	let tech=this.props.lang === 'en' ? "Technologies:" : "Технологии:";
	let photoLabel=this.props.lang === 'en' ? "Show Photo" : "Фото";
	let pageTitle=this.props.lang === 'en' ? "Short Bio" : "Основные сведения";

	function contactsHtml() {
		return {__html: 'hvs-fasya@mail.ru<br /> +7(916)377-76-04'};
		};
	let contacts = <span dangerouslySetInnerHTML={contactsHtml()} />;


	let tableData = this.props.lang === 'en' ? [
		{title: 'Name:', texts: fio, selected: true},
		{title: 'Date of Birth:', texts: '22 April 1973'},
		{title: 'Place of Birth:', texts: 'Moscow, USSR'},
		{title: 'Location:', texts: 'Moscow, Russian Federation'},
		{title: 'Contacts:', texts:  contacts}
		] : [
		{title: 'ФИО:', texts: fio, selected: true},
		{title: 'Дата рождения:',texts: '22 Апреля 1973'},
		{title: 'Место рождения:', texts: 'Москва, СССР'},
		{title: 'Местожительства:', texts: 'Москва, РФ'},
		{title: 'Контакты:', texts: contacts}
		];
	let self = this;


	function mepiHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>MEPHI</b> - Moscow Engeneering Phisics Institute (1989-1995)<br /><i>(MSc - Solid State Physics)</i>'};
		case "ru": return {__html: '<b>МИФИ</b> - Московский Инженерно-Физический Институт (1989-1995)<br /><i>(специальность - Физика Твердого Тела)</i>'}; 
		default:
		}};
	let mepi = <span dangerouslySetInnerHTML={mepiHtml()} />;

	function msalHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>MSAL</b> - Moscow State Academy of Law (2000-2004)<br /><i>(LLM - Civil Law)</i>'}; 
		case "ru": return {__html: '<b>МГЮА</b> - Московская Государственная Юридическая Академия(2000-2004)<br /><i>(специальность - Гражданское право)</i>'}; 
		default:
		}};
	let msal = <span dangerouslySetInnerHTML={msalHtml()} />

	let tableDataSecond = [
		{selected: true, title: edu, texts: mepi},
		{selected: true, title: "", texts: msal},
		{title: tech, texts: 'HTML, CSS, Javascript, jQuery, Bootstrap 3, PHP, Laravel 5, Git, Apache'},
		];

	let customActions = [
		<FlatButton
			label="OK"
			primary={true}
			onTouchTap={this.handleClose}/>
		];

    	return ( 
    		<div style={styles.containerStyle}>
				<Dialog
				  title={fio}
				  ref="photoDialog"
				  actions={customActions}
				  modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}>
					<Paper style={styles.paperStyle} zDepth={3}>
						<img style={styles.imgStyle} src="img/elena.jpg" alt="Tolkacheva"/>
					</Paper>
				</Dialog>
				<div className="row top-xs top-sm top-md top-lg">
					<div style={styles.imgDialogStyle} 
						className="col-xs-11 col-sm-3 col-md-offset-1 col-md-2 col-lg-offset-1 col-lg-2">
						<FlatButton 
							label={photoLabel} 
							primary={true} 
							onTouchTap={this.handleOpen}/>
					</div>
					<div className="col-xs-11 col-sm-offset-1 col-sm-7 col-md-offset-2 col-md-6 col-lg-offset-2 col-lg-6">
					<div className="box">
						<Table
				          height={this.state.height}
				          fixedHeader={this.state.fixedHeader}
				          fixedFooter={this.state.fixedFooter}
				          selectable={this.state.selectable}
				          multiSelectable={this.state.multiSelectable}
				        >
				          <TableHeader
				            displaySelectAll={this.state.showCheckboxes}
				            adjustForCheckbox={this.state.showCheckboxes}
				            enableSelectAll={this.state.enableSelectAll}
				          >
				            <TableRow>
				              <TableHeaderColumn colSpan="3" style={{textAlign: 'left'}}>
				                <h2>{pageTitle}</h2>
				              </TableHeaderColumn>
				            </TableRow>
				          </TableHeader>
				          <TableBody
				            displayRowCheckbox={this.state.showCheckboxes}
				            deselectOnClickaway={this.state.deselectOnClickaway}
				            showRowHover={this.state.showRowHover}
				            stripedRows={this.state.stripedRows}
				          >
				            {tableData.map( (row, index) => (
				              <TableRow key={index} selected={row.selected}>
				                <TableRowColumn style={styles.titlesStyle}>{row.title}</TableRowColumn>
				                <TableRowColumn style={styles.textsStyle}>{row.texts}</TableRowColumn>
				              </TableRow>
				              ))}
				          </TableBody>
				        </Table>
						
						<Table
				          height={this.state.height}
				          fixedHeader={this.state.fixedHeader}
				          fixedFooter={this.state.fixedFooter}
				          selectable={this.state.selectable}
				          multiSelectable={this.state.multiSelectable}
				        >
				          <TableHeader
				            displaySelectAll={this.state.showCheckboxes}
				            adjustForCheckbox={this.state.showCheckboxes}
				            enableSelectAll={this.state.enableSelectAll}
				          >
				            <TableRow>
				              <TableHeaderColumn colSpan="3" style={{textAlign: 'left'}}>
				                
				              </TableHeaderColumn>
				            </TableRow>
				          </TableHeader>
				          <TableBody
				            displayRowCheckbox={this.state.showCheckboxes}
				            deselectOnClickaway={this.state.deselectOnClickaway}
				            showRowHover={this.state.showRowHover}
				            stripedRows={this.state.stripedRows}
				          >
				            {tableDataSecond.map( (row, index) => (
				              <TableRow key={index} selected={row.selected}>
				                <TableRowColumn style={styles.titlesStyle}>{row.title}</TableRowColumn>
				                <TableRowColumn style={styles.textsStyle}>{row.texts}</TableRowColumn>
				              </TableRow>
				              ))}
				          </TableBody>
				        </Table>
					</div>
					</div>
				</div>
			</div>
    		);
    }

}

export default ShortBio;