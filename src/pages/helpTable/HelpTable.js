import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import data from '../../data/data.json';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search, CSVExport} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
//import ToolkitProvider, { Search, CSVExport  } from 'react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import Navbar from "../../components/navbar/Navbar";

const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;
let convertedData = JSON.parse(JSON.stringify(data));

convertedData = convertedData.map((item, index) => ({ ...item, id: index + 1 }));
const columns = [
    {
        dataField: "id",
        text: "index",
        sort: true,
        filter: textFilter()
    },
    {
        dataField: "konum_il",
        text: "İl",
        sort: true,
        filter: textFilter()
    },
    {
        dataField: "konum_ilce",
        text: "İlçe",
        sort: true,
        filter: textFilter()
    },
    {
        dataField: "konum_mahalle",
        text: "Mahalle",
        sort: true,
        filter: textFilter()
    },
    {
        dataField: "isimsoyisim",
        text: "İsim Soyisim",
        sort: true,
        filter: textFilter()
    },
    {
        dataField: "adres",
        text: "Adres",
        sort: true,
        filter: textFilter()
    },
];


const HelpTable = () => {
    return (
        <div className="App">
            <Navbar/>
            <ToolkitProvider
                keyField="id"
                data={convertedData}
                columns={columns}
                search
                wrapperClasses="table-responsive"
                pagination={paginationFactory({sizePerPage: 25})}
                exportCSV={ {
                    fileName: 'enkazaltindakiler.csv',
                    onlyExportFiltered:true,
                    exportAll: false,
                    ignoreHeader: true,
                    noAutoBOM: false
                } }
                filter={ filterFactory() }

            >
                {(props) => (
                    <div>
                        <h3>Sosyal Medyada Yardım talebinde bulunan depremzedeleri arayabilirsiniz.</h3>
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
