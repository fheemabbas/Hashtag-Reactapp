
import { TextField } from "@material-ui/core";
import axios from "axios";
import React from "react";
import Post from "./Post";
import ReactHighcharts from 'react-highcharts';

const Dashboard = () => {
    const [searchKey, setsearchKey] = React.useState('');
    const [timer, setTimer] = React.useState();
    const [posts, setposts] = React.useState();
    const [sentiment, setSentiment] = React.useState([]);
    const [isData, setIsdata] = React.useState('nodata')
    var Chartconfig = {
        chart: {
            type: 'column',
            width:500,
            maxWidth:500,
            minWidth:50,
        },
        title: {
            text: 'Sentiment'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
    
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
    
        series: [
            {
                name: "Sentiment",
                colorByPoint: true,
                data: sentiment
            }
        ]
    };
    const onSearch = (search) => {
        setIsdata('loading')
		clearTimeout(timer);
        
		let temp = setTimeout(function () {
			setsearchKey(search)
		}, 500);
		setTimer(temp)
	}
    React.useEffect(() => {
        if (searchKey !== '') {
        axios.get(`https://twitter-sa-api.herokuapp.com/?query=${searchKey}`).then(res => {
            setposts(res.data.Tweets.tweets.slice(0,5))
            const data = res.data.Sentiment
            const setup = [];
            for (const [key, value] of Object.entries(data)) {
                setup.push({ name : key , y: value })
            }
            setSentiment(setup)
            setIsdata('')
        }).catch(error => {
            setposts([])
            setSentiment([])
            setIsdata('nodata')
        })
    }
    },[searchKey])
    return (
        <div className="dashboard">
            <div className="searchbox">
           <TextField
                id="outlined-basic" 
                label="Hastag search" 
                variant="outlined"
                onChange={(e) => onSearch(e.target.value)}
                />
            </div>
            {isData === '' && <div className='conatin'>
                <div className="post_contain">
                    {posts && posts.map((post) => (
                    <Post
                        key={post.Tweet_Text}
                        displayName={post.name}
                        username={post.user_name}
                        verified={true}
                        text={post.Tweet_Text}
                        avatar={post.profile_image}
                        // image={post.image}
                    />
                    ))}
                </div>
                <div className="chart_contain">
                {sentiment && sentiment.length > 0 && <ReactHighcharts config={Chartconfig}></ReactHighcharts>}
                </div>
            </div>}
            {isData === 'nodata' && <div>
                No Tweets to show, Enter some text in above sarch box.
            </div>}
            {isData === 'loading' && <div class="spinner-grow text-primary" role="status">
                Loading...
            </div>}
        </div>
    );
}

export default Dashboard;