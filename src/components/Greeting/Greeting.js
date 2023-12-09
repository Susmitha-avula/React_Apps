let d=new Date()
export default d;
export function Day(d1){
    switch(d1){
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        default:
            return "Invalid Input"
    }
}
export function Months(m){
    switch(m){
        case 0:
            return "January"
        case 1:
            return "Febuary"
        case 2:
            return "March"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "June"
        case 6:
            return "July"
        case 7:
            return "August"
        case 8:
            return "September"
        case 9:
            return "October"
        case 10:
            return "November"
        case 11:
            return "December"
        default:
            return "Invalid Input"

    }
}
export function Hour(h){
    if(h>=0 && h<=12){
        return 'Good Morning'
    }
    else if(h>12 && h<=16){
        return "Good Afternoon"
    }
    else if(h>16 && h<=21){
        return "Good Evening"
    }
    else{
        return "Good Night"
    }
}
export function Greeting(props){
     return(
        <h2>Hi User {props.Greeting}, Today date was {props.day} {props.month} {props.year} </h2>
     )
}
