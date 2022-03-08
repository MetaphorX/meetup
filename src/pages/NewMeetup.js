import {useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(){
    const history = useNavigate();//Redirecting after filling form

    function addMeetupHandler(meetupData){
        fetch('https://react-4a9d5-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            history('/'); //Redirecting after submitting the form
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}
export default NewMeetupsPage;