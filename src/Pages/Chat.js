import React from 'react'

export class Chat extends React.Component {

    state = {
        userOnline: []
    }

    componentDidMount(){
        // this.props.io.emit('test', this.props.username)
        // this.props.io.on('test-back', (data) => {
        //     alert(data)
        // })

        // this.props.io.emit('send-data-bebas', 'Purwadhika Digital School')
        this.props.io.on('user-online', (data) => {
            this.setState({userOnline: data})
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className='border rounded-0 shadow' style={{height : "670px", overflow: "auto", position: "relative"}} >
                            <div className='bg-primary text-white p-3' style={{position: "sticky", top: "0px", right: "0px", left: "0px"}}>
                                User Online : 
                                {
                                    this.state.userOnline?
                                        this.state.userOnline.map((value, index) => {
                                            return(
                                                <span>
                                                    {value.name}
                                                </span>
                                            )
                                        })
                                    :
                                        null
                                }
                            </div>
                            <div className="alert alert-warning rounded-0 text-center mx-3 mt-3 mb-5" >
                                Hello, {this.props.username? this.props.username : null}
                            </div>
                            <div className="row justify-content-start mx-1">
                                <div className="px-2 py-2 mx-3 mb-3 rounded bg-primary" style={{display: "inline-block"}}>
                                    Pesan Saya
                                </div>
                            </div>
                            <div className="row justify-content-start mx-1">
                                <div className="px-2 py-2 mx-3 mb-3 rounded border border-primary" style={{display: "inline-block"}}>
                                    Pesan Orang Lain Pesan Orang Lain Pesan Orang Lain Pesan Orang Lain Pesan Orang Lain
                                </div>
                            </div>
                            <div style={{position: "fixed", left: "499px", bottom: "0px", right: "499px"}} className='p-4 bg-primary d-flex justfy-content-between'>
                                <input type='text' className='form-control rounded-0 w-100'  />
                                <input type='button' className='btn btn-warning rounded-0' value='Send'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat