import React ,{useState} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {AddNewReview} from '../redux/Actions/reviewActions'

const sendReview = () => {
   const dispatch = useDispatch()
   const reviews = useSelector(state => reviewReducer.state)
   const [info, setInfo] = useState({
    note:"",
    FoodNote:"",
    DelieveryNote:""
   })
   const handleInfoChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
}
const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(AddNewReview(info),history);
   

}
    return (
        <div>
            
        </div>
    )
}

export default sendReview
