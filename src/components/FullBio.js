import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
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

class FullBio extends Component {

	constructor(props, context) {
    super(props, context);

    this.state = {
		open: false,
		fixedHeader: true,
	    fixedFooter: true,
	    stripedRows: false,
	    showRowHover: true,
	    selectable: true,
	    multiSelectable: false,
	    enableSelectAll: false,
	    deselectOnClickaway: true,
	    showCheckboxes: false,
	    height: 'auto',
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
	// let tech=this.props.lang === 'en' ? "Technologies:" : "Технологии:";
	let photoLabel=this.props.lang === 'en' ? "Show Photo" : "Фото";
	let pageTitle = this.props.lang === 'en' ? "Jobs" : "Опыт работы";

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
	let msal = <span dangerouslySetInnerHTML={msalHtml()} />;
	function dinaHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>ZAO "Dina International"</br>manager assistent</b></br>disposal medical products</br>medical laboratory equipment and supplies'}; 
		case "ru": return {__html: '<b>ЗАО "Дина Интернешнл"</br>помощник менеджера</b></br>изделия медицинского назначения</br>медицинское лабораторное оборудование и расходные материалы'}; 
		default:
		}};
	let dina = <span dangerouslySetInnerHTML={dinaHtml()} />;
	function dlnHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>OOO "LTD Forest" / ZAO "DLN Farmesi"</br>manager/senior manager</b></br>pharmacy chain'}; 
		case "ru": return {__html: '<b>ООО "ЛТД Форест" / ЗАО "ДЛН Фармэси"</br>менеджер/старший менеджер</b></br>аптечная сеть'};
		default:
		}};
	let dln = <span dangerouslySetInnerHTML={dlnHtml()} />;
	function stHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>OOO "Vektor" / ZAO "ST Group" / АО "SP "Perestroyka"</br>legal department chief assistent</b></br>real estate development'}; 
		case "ru": return {__html: '<b>ООО "Вектор" / ЗАО "СТ Групп" / АО "СП "Перестройка"</br>помощник начальника отдела организационно-правового обеспечения</b></br>строительный девелопмент'}; 
		default:
		}};
	let st = <span dangerouslySetInnerHTML={stHtml()} />;
	function regHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>OOO "Registrum"</br>leading specialist/deputy CEO</b></br>property rights state registration support for residential construction'}; 
		case "ru": return {__html: '<b>ООО "Региструм"</br>ведущий специалист/зам генерального директора</b></br>госрегистрация прав собственности в новостройках'}; 
		default:
		}};
	let reg = <span dangerouslySetInnerHTML={regHtml()} />;
	function simbaHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>OOO "Sim-ba"</br>chief accountant</b></br>food retail'}; 
		case "ru": return {__html: '<b>ООО "Сим-Ба"</br>главный бухгалтер</b></br>продуктовая розница'}; 
		default:
		}};
	let simba = <span dangerouslySetInnerHTML={simbaHtml()} />;
	function amrHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>OOO "AMR"</br>CEO</b></br>furniture components veneering'}; 
		case "ru": return {__html: '<b>ООО "АМР"</br>генеральный директор</b></br>фанерование мебельных деталей'}; 
		default:
		}};
	let amr = <span dangerouslySetInnerHTML={amrHtml()} />;
	function rushHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>OOO "Rush Agency"</br>Junior PHP developer</b></br>Search Engine Optimization and Analytics</br><b>Duties:</b><br/>full-stack sole development (from scratch) and support of internal use web services, deployed on VPS and dedicated servers.<br/><b>Done:</b><br/>two rather volume in functionality services have been developed and operate stably. The first one is simple in terms of architecture and not so simple in terms of logic CRUD-application (SEO-texts analyzer). The second - the integrated web-based system with functionality as follows: data collection, storage and processing, auto-deploy of dependent applications, basic monitoring.<br/>Both services also include interaction with third-part services (XML and SOAP).<br/>Stack of technologies used:<br/>PHP-5.6 / Laravel 5.2, Bootstrap 3, jQuery, MySQL 5.5, Postgresql 9.3, Apache 2.4, Git'}; 
		case "ru": return {__html: '<b>ООО "Rush Agency"</br>младший PHP разработчик</b></br>поисковая оптимизация и аналитика</br><b>Обязанности:</b></br>full-stack разработка и поддержка внутренних веб-сервисов компании, развертывание на VPS и dedicated серверах.<br/><b>Сделано: </b></br>с нуля (в одно лицо) разработаны и стабильно функционируют 2 достаточно объемных по функционалу сервиса. Один - простое в смысле архитектуры и не очень простое в смысле логики аналитическое CRUD-приложение (анализ SEO-текстов). Второй - составная веб-система, включающая функционал сбора и хранения данных, их обработку, автоматический деплой зависимых приложений, базовый мониторинг.<br/>Оба сервиса в том числе включают модули взаимодествия со сторонними сервисами с использованием XML и SOAP.<br/>Стек используемых технологий:<br/>PHP-5.6 / Laravel 5.2, Bootstrap 3, jQuery, MySQL 5.5, Postgresql 9.3, Apache 2.4, Git'}; 
		default:
		}};
	let rush = <span dangerouslySetInnerHTML={rushHtml()} />;
	
	let tableData = [
		{selected: true, title: edu, texts: mepi},
		{selected: true, title: "", texts: msal},
		{title: '2015-2016', texts: rush},
		{title: '2005-2015', texts: amr},
		{title: '2002-2005', texts: simba},
		{title: '2000-2002', texts: reg},
		{title: '1998-2000', texts: st},
		{title: '1997-1998', texts: dln},
		{title: '1996-1997', texts: dina}
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
						<img style={styles.imgStyle} src="img/elena.jpg" alt="Tolkacheva Elena"/>
					</Paper>
				</Dialog>
				<div className="row top-xs top-sm top-md top-lg">
					<div style={styles.imgDialogStyle} 
						className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-9 col-lg-offset-1 col-lg-9">
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
					</div>
					</div>
				</div>
			</div>
    		);
    }

}

export default FullBio;