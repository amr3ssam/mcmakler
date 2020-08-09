
import React from "react";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Translation } from 'react-i18next';
import Layout from "../../components/layout";
import ApplicantHeader from "../../components/applicantHeader";
import LoadingComponent from "../../components/loadingComponent";
import ContentSection from "../../components/contentSection";
import ErrorDialog from "../../components/errorDialog";
import DropdownMenu from "../../components/dropdownMenu";
import Icon from "../../components/icon";
import { ContentWrapper, SearchWrapper, FilterWrapper, DropDownWrapper } from './styles'

// to only get history and location in props to follow typescript rules
interface IApplicantProps {
    history?: any,
    location?: any,
}
// special case the style for the seach Material UI component
const styles = {
    input: {
        height: '40px',
        marginRight: '24px',
    }

};
// interface to define object which will be used
interface Customer {
    firstname?: string,
    lastname?: string,
    mobile?: string,
    email?: string,
    status?: string,
    date?: string,
    bid?: string,
}
interface SortedData {
    name?: string,
    data?: Array<Customer>
}
interface SortedCount {
    name?: string,
    count?: number
}
// status array for Mock application
const status = [
    {
        id: 1,
        value: "interested",
        showValue: "New"
    },
    {
        id: 2,
        value: "Appointment_Set",
        showValue: "Appointment"
    },
    {
        id: 3,
        value: "Property_Viewed",
        showValue: "Viewed"
    },

    {
        id: 4,
        value: "Offer_Accepted",
        showValue: "Others"
    },
]
class index extends React.Component<IApplicantProps> {
    state = {
        data: [],
        loading: true,
        countArray: [],
        showDialog: false,
        unsortedData: [],
        searchText: ''
    }
    componentDidMount() {
        //get the query parameter from Url to check if it's has a search string 
        const params = new URLSearchParams(this.props.location.search)
        const search = params.get('search')
        const searchString = search !== null ? search : "";
         console.log("location", searchString )
        // to call  fetch the data funtion from API as soon as component renders
        this.fetchPage(searchString)
    }
    //fetch data for the first time from the mock API
    fetchPage = (searchValue:string) => {
        //fetch call for the API
        fetch("./db.json")
            .then(res => res.json())
            .then((data) => {
                this.sortData(data.customers, searchValue)

            }).catch(err => {
                this.setState({
                    loading: false,
                    showDialog: true,
                    searchText: searchValue
                })
            })
    }
    // function to sort the data for the UI
    sortData = (data: Array<Customer>, searchText: string) => {
        let sortedData: Array<SortedData> = [];
        let sortedCount: Array<SortedCount> = [];
        sortedCount.push({
            name: "Total",
            count: data.length
        })

        status.forEach(element => {
            //getting data for each status
            const elementArray = data.filter(function (applicant: Customer) {
                const fullname = (applicant.firstname ?? "") + (applicant.lastname ?? "");
                return (applicant.status === element.value
                    && ((fullname && fullname.toLowerCase().trim().includes(searchText.toLowerCase().trim())) ||
                        (applicant.email && applicant.email.toLowerCase().trim().includes(searchText.toLowerCase().trim()))
                    ));
            });
            // adding the data in an array depend on the status
            if (elementArray.length > 0) {
                sortedData.push({
                    name: element.value,
                    data: elementArray
                })
            }
            // count data for each status
            sortedCount.push({
                name: element.showValue,
                count: elementArray.length
            })
        });
        // rerender the component after getting data
        this.setState({
            data: sortedData,
            loading: false,
            countArray: sortedCount,
            unsortedData: data,
            searchText: searchText
        })
    }
    // function to handle the search 
    handeSearchData = (event: any) => {
        const { unsortedData } = this.state;
        //this.props.history.push('/applicants/?search=' + event.target.value)
        //get the sharable link with search query paramater
        this.props.history.push({
            search: '?search=' + event.target.value
        })
        this.setState({
            searchText: event.target.value
        })
        // resort data based on the search
        this.sortData(unsortedData, event.target.value)
    }
    render() {
        const { data, loading, countArray, showDialog ,searchText} = this.state;

        return (
            <Translation>
                {
                    (t, { i18n }) => <div >
                        
                        <Layout>
                            <ErrorDialog showDialog={showDialog} />
                            {loading ?
                                <ContentWrapper >
                                    <ApplicantHeader sortedCount={countArray} />
                                    <LoadingComponent loading={loading} /></ContentWrapper>
                                :
                                   


                            <ContentWrapper >
                                <ApplicantHeader sortedCount={countArray} />
                                <FilterWrapper>
                                    <SearchWrapper>
                                        <TextField
                                            fullWidth={true}
                                            id="outlined-start-adornment"
                                            placeholder={t('search')}
                                            InputProps={{
                                                style: styles.input,
                                                startAdornment: <InputAdornment position="start"><Icon src="/images/search.svg" /></InputAdornment>,
                                            }}
                                            onChange={this.handeSearchData}
                                            variant="outlined"
                                            value={searchText}
                                        />

                                    </SearchWrapper>
                                    <DropDownWrapper>
                                        <DropdownMenu label={t('bid')} />
                                        <DropdownMenu data={status} label={t('status')} />
                                    </DropDownWrapper>

                                </FilterWrapper>
                                    {data.map((item: SortedData) => {
                                        return <ContentSection name={item.name} data={item.data} />
                                    })
                               }


                            </ContentWrapper>

                            }

                        </Layout>
                    </div>
                }
            </Translation>

            
        );
    }
}

export default index;