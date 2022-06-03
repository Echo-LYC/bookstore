import React from "react";
import {request} from "../util/Ajax";
import {Col, Container, Form, FormControl, Image, InputGroup, Row, Tab, Tabs} from "react-bootstrap";
import HeaderInfo from "../components/headerInfo";
import SideBar from "../components/sideBar";
import ReactTable from "../components/reactTable";
import FixedImage from "../components/fixedImage";
import {DEFAULT_COVER} from "./bookEditorView";
import {DEFAULT_PHOTO} from "./userManageView";
const autobind = require('class-autobind').default;

export default class StatisticsView extends React.PureComponent {
    constructor (props) {
        super(props);
        const user = JSON.parse(localStorage.getItem('user'));
        this.state = {
            user: user,
            orders: [],
            bookStatistics: [],
            userStatistics: [],
            startDate: "",
            endDate: "",
        };
        this.userColumns = [
            {
                Header: '用户',
                accessor: 'user',
                id: 'user',
                Cell: ({ value }) => (
                    <Row>
                        <Col sm="auto">
                            <Image roundedCircle={40} width={40} height={40} src={value.image ? value.image : DEFAULT_PHOTO}/>
                        </Col>
                        <Col>
                            {value.username}
                        </Col>
                    </Row>
                ),
            },
            {
                Header: '购买数量',
                accessor: 'totalNum',
                id: 'totalNum',
                Footer: (info) => {
                    const total = info.rows.reduce((sum, row) => row.values.totalNum + sum, 0);
                    return <span className="fw-bold">总购买数量：{total}</span>
                },
            },
            {
                Header: '购买金额',
                accessor: 'totalPrice',
                id: 'totalPrice',
                Cell: ({ value }) => (
                    <span>{value.toFixed(2)}</span>
                ),
                Footer: (info) => {
                    const total = info.rows.reduce((sum, row) => row.values.totalPrice + sum, 0);
                    return <span className="fw-bold">总购买金额：{total.toFixed(2)}</span>
                },
            },
        ];
        this.bookColumns = [
            {
                Header: '书籍',
                accessor: 'book',
                id: 'book',
                Cell: ({ value }) => (
                    <Row>
                        <Col sm="auto">
                            <FixedImage src={value.image ? value.image : DEFAULT_COVER} maxHeight={75} maxWidth={75}/>
                        </Col>
                        <Col>
                            <Row className="mb-2 text-black fs-5">
                                {value.title}
                            </Row>
                            <Row className="mb-2 text-muted fs-6">
                                {value.author}
                            </Row>
                        </Col>
                    </Row>
                ),
            },
            {
                Header: '购买数量',
                accessor: 'totalNum',
                id: 'totalNum',
                Footer: (info) => {
                    const total = info.rows.reduce((sum, row) => row.values.totalNum + sum, 0);
                    return <span className="fw-bold">总购买数量：{total}</span>
                },
            },
            {
                Header: '购买金额',
                accessor: 'totalPrice',
                id: 'totalPrice',
                Cell: ({ value }) => (
                    <span>{value.toFixed(2)}</span>
                ),
                Footer: (info) => {
                    const total = info.rows.reduce((sum, row) => row.values.totalPrice + sum, 0);
                    return <span className="fw-bold">总购买金额：{total.toFixed(2)}</span>
                },
            },
        ];
        autobind(this)
    }

    componentDidMount () {
        request("/order/" + this.state.user.id, "GET")
            .then((res) => {
                if (res.ok) {
                    res.data.map((x) => x.time = new Date(x.time));
                    this.setState({orders: res.data}, this.computeStatistics);
                } else {
                    throw new Error(JSON.stringify(res.data));
                }
            })
            .catch((e) => {
                console.log(e.message);
            });
    }

    computeStatistics () {
        let orders = this.state.orders.slice();
        if (this.state.startDate) {
            const startDate = new Date(this.state.startDate);
            startDate.setHours(0);
            orders = orders.filter((x) => x.time >= startDate);
        }
        if (this.state.endDate) {
            const endDate = new Date(this.state.endDate);
            endDate.setDate(endDate.getDate() + 1);
            endDate.setHours(0);
            orders = orders.filter((x) => x.time < endDate);
        }
        const bookStatistics = {};
        orders.map((order) => order.orderItems.map((x) => {
            if (bookStatistics[x.book.id]) {
                bookStatistics[x.book.id].totalNum += x.num;
                bookStatistics[x.book.id].totalPrice += x.num * x.price;
            } else {
                bookStatistics[x.book.id] = {
                    book: x.book,
                    totalNum: x.num,
                    totalPrice: x.num * x.price,
                };
            }
        }));
        console.log(bookStatistics);
        this.setState({bookStatistics: Object.values(bookStatistics)});
        if (this.state.user.auth === 'ADMINISTRATOR') {
            const userStatistics = {};
            orders.map((order) => {
                if (userStatistics[order.user.id]) {
                    userStatistics[order.user.id].totalNum += order.orderItems.reduce((s, x) => s + x.num, 0);
                    userStatistics[order.user.id].totalPrice += order.total;
                } else {
                    userStatistics[order.user.id] = {
                        user: order.user,
                        totalNum: order.orderItems.reduce((s, x) => s + x.num, 0),
                        totalPrice: order.total,
                    };
                }
            });
            console.log(userStatistics);
            this.setState({userStatistics: Object.values(userStatistics)});
        }
    }

    render () {
        return <Container>
            <HeaderInfo/>
            <hr className="bordered-dashed"/>
            <Row>
                <Col sm={3}>
                    <SideBar defaultActiveKey="/statistics"/>
                </Col>
                <Col sm={9}>
                    <Form>
                        <Row>
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>起始日期</InputGroup.Text>
                                    <FormControl
                                        type="date"
                                        value={this.state.startDate}
                                        onChange={(e) => this.setState({startDate: e.target.value}, this.computeStatistics)}
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>终止日期</InputGroup.Text>
                                    <FormControl
                                        type="date"
                                        value={this.state.endDate}
                                        onChange={(e) => this.setState({endDate: e.target.value}, this.computeStatistics)}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Form>
                    <Tabs defaultActiveKey="book" className="mb-3">
                        <Tab eventKey="book" title="Book">
                            <ReactTable columns={this.bookColumns} data={this.state.bookStatistics} initialState={{pageSize: 15, sortBy: [{id: 'totalPrice', desc: true}]}}/>
                        </Tab>
                        {this.state.user.auth === 'ADMINISTRATOR' && <Tab eventKey="user" title="User">
                            <ReactTable columns={this.userColumns} data={this.state.userStatistics} initialState={{pageSize: 15, sortBy: [{id: 'totalPrice', desc: true}]}}/>
                        </Tab>}
                    </Tabs>
                </Col>
            </Row>
        </Container>
    }
}
