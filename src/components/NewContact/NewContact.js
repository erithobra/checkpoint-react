import React from 'react';

const NewContact = () => {
  return(
    <div> 
      <h1>New Contact</h1>
      <form>
        <input type="text" name="name" placeholder="name"/>
        <input type="email" name="email" placeholder="email" />
        <input type="profile_picture" name="profile_picture" placeholder="profile_picture"/>
      </form>
    </div>
  )
}


export default NewContact;