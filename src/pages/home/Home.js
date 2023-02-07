import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import data from '../../data/injuriedPeopleData.json';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search, CSVExport} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import './home.css';
import Navbar from '../../components/navbar/Navbar';

const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;


const  convertedData = data.map((item, index) => ({ ...item, id: index + 1 }));
const columns = [
    {
        dataField: "id",
        text: "index",
        sort: true,
        filter: textFilter()
    },
    {
        dataField: "tarih",
        text: "Tarih",
        sort: true,
        filter: textFilter()
    },
    {
        dataField: "sehir",
        text: "Şehir",
        sort: true,
        filter: textFilter()
    },
    {
        dataField: "hastane",
        text: "Hastane",
        sort: true,
        filter: textFilter()
    },
    {
        dataField: "tc",
        text: "TC",
        sort: true,
        filter: textFilter()
    },
    {
        dataField: "isim",
        text: "isim",
        sort: true,
        filter: textFilter()
    },
    {
        dataField: "servis",
        text: "Servis",
        sort: true,
        filter: textFilter()
    },
    {
        dataField: "durum",
        text: "Durum",
        sort: true,
        filter: textFilter()
    },
    {
        dataField: "gelis_sekli",
        text: "Geliş Şekli",
        sort: true,
        filter: textFilter()
    },

];

const HelpTable = () => {
    return (
        <div className="App">
            <Navbar />
            <ToolkitProvider
                keyField="id"
                data={convertedData}
                columns={columns}
                search
                striped
                bordered={false}
                wrapperClasses="table-responsive"
                pagination={paginationFactory({sizePerPage: 25})}
                exportCSV={ {
                    fileName: 'yaralilar.csv',
                    onlyExportFiltered:true,
                    exportAll: false,
                    ignoreHeader: true,
                    noAutoBOM: false
                } }
                filter={ filterFactory() }

            >
                {(props) => (
                    <div>
                        <h3>Yaralı depremzedeleri arayabilirsiniz.</h3>
                        <ExportCSVButton className="btn btn-success" { ...props.csvProps }>Filtrele/Excel çıktı al</ExportCSVButton>
                        <hr/>
                        <SearchBar {...props.searchProps} />
                        <ClearSearchButton className="btn btn-warning"/>
                        <BootstrapTable
                            filter={ filterFactory() }
                            { ...props.baseProps }
                        />
                    </div>
                )}
            </ToolkitProvider>
        </div>
    );
}

export default HelpTable;
