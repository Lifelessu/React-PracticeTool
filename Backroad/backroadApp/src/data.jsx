import Tour1 from './images/tour-1.jpeg';
import Tour2 from './images/tour-2.jpeg';
import Tour3 from './images/tour-3.jpeg';
import Tour4 from './images/tour-4.jpeg';

export const pageLinks = [
    {id:1, href:'#home', text:'home'},
    {id:2, href:'#about', text:'about'},
    {id:3, href:'#services', text:'services'},
    {id:4, href:'#tours', text:'tours'}
];

export const socialLinks = [
    {id:1, href:'https://www.twitter.com', class:'fab fa-twitter'},
    {id:2, href:'https://www.facebook.com', class:'fab fa-facebook'},
    {id:3, href:'https://www.twitter.com', class:'fab fa-squarespace'}
    
];

export const services = [
    {id:1, title:'Saving Money', icon:'fas fa-wallet fa-fw', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'},
    {id:2, title:'Endless Hiking', icon:'fas fa-tree fa-fw', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'},
    {id:3, title:'Amazing Comfort', icon:'fas fa-socks fa-fw', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'},
];

export const tourSpot = [
    {
        id:1,
        title: 'Tiber Adventure',
        date: 'August 26th, 2020',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'China',
        days: '6 Days',
        amount: 'From $2100',
        img: Tour1
    },

    {
        id:2,
        title: 'Adventure Time',
        date: 'September 12th, 2020',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'China',
        days: '6 Days',
        amount: 'From $2100',
        img: Tour2
    },

    {
        id:3,
        title: 'Best of Java',
        date: 'October 1th, 2020',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'Indonesia',
        days: '11 Days',
        amount: 'From $1400',
        img: Tour3
    },

    {
        id:4,
        title: 'Explore Hong Kong',
        date: 'September 15th, 2020',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'Hong Kong',
        days: '8 Days',
        amount: 'From $5000',
        img: Tour4
    }
];