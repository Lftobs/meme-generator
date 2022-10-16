import { Component } from "react";
import {toPng} from "html-to-image";
import download from "downloadjs";


const querParams = (obj) => {
  const uparams= Object.entries(obj).map(([key, value]) => `${key}=${value}`)
  return '?' + uparams.join('&')
}

let template

class Gen extends Component {
    constructor() {
        super()
        this.state = {
            toptext: "",
            bottomtext:"",
            randomimg:"https://i.imgflip.com/30b1gx.jpg",
            id: 0,
            allmemes: [],
        }

        this.handlechange = this.handlechange.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
        this.downloadMeme = this.downloadMeme.bind(this)
        this.captionImg = this.captionImg.bind(this)
    }

    handlechange(event) {
            const {name, value} = event.target
            this.setState({
               [name]: value
             })
           } 

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                // console.log(memes[2] + "ok")
                this.setState({allmemes: memes})
            })

    }
    
    handlesubmit(event) {
        event.preventDefault()
        const randomNo = Math.floor(Math.random() * this.state.allmemes.length)  
        const randomimgg = this.state.allmemes[randomNo]
        const random = randomimgg.url
        let template = randomimgg.id
        this.setState({id: template})
        // console.log(randomimgg)
        this.setState({ randomimg: random})
        console.log("why")
    }

    

    downloadMeme() {
      const meme = document.getElementById("meme")
      toPng(meme)
        .then(dataURL => {
            download(dataURL, "meme.png")
            //console.log("clicked")
        })
        .catch( () => console.log("Error"))
    }

    captionImg(event) {
      event.preventDefault()
      const params = {
        template_id : this.state.id,
        username:"__Memes__",
        password: process.env.React_App_meme_gen_pwd,
        text0: this.state.toptext,
        text1: this.state.bottomtext
      }
      fetch(`https://api.imgflip.com/caption_image${querParams(params)}`)
        .then(response => response.json())
        .then(response => {
            const x = response.data
            //console.log(x.url)
            //console.log(x)
            this.setState({ randomimg: x.url })
            
        })
      
    }

    render() {
        return(
            <div>
              <form className="container mb-3" onSubmit={this.handlesubmit}>
                <div className="input-group mb-4">
                  <span className="input-group-text ">Top-text</span>
                  <input className="form-control " name="toptext" type="text"onChange={this.handlechange} 
                         value={this.state.toptext}  /><br />
                </div>
                <div className="input-group mb-4">
                
                  <input className="form-control"  name="bottomtext" type="text" onChange={this.handlechange}
                          value={this.state.bottomtext} /><br />
                    <span className="input-group-text ">Bottom-text</span>
                </div>
                
                <div className="d-flex but">
                  <button className="btn btn-primary mr-4 ">Next</button>
                  <div className="btn btn-primary ml-5 " onClick={this.captionImg} > Generate meme</div>
                </div>
                  
 
              </form>
              
              
              <div id="meme" className="mb-3">
                <img src={this.state.randomimg} alt="meme" />
                {/* <h2 className="txt" >{this.state.toptext}</h2>
                <h2 className="txt2" >{this.state.bottomtext}</h2> */}
              </div>
              <div className="container d-flex justify-content-center mb-3" >
                <button className=" btn btn-primary" onClick={this.downloadMeme} >Download</button>
              </div>
                
            </div>
        )
    }
}

export default Gen