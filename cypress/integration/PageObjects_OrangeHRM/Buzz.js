export class Buzz
{
    ClickUpadte(){
        const clickupdate=cy.get('#status-tab-label')
        clickupdate.click()
        return this
    }
   Updatestatus(comment) 
   {
     const content=cy.get('#createPost_content')
     content.type(comment)
     return this
   }
   ClickPost()
   {
       const cbutton=cy.get('#postSubmitBtn')
       cbutton.click()
       return this
   }
   clickImage(){
    const clickimage=cy.get('#images-tab-label')
    clickimage.click()
    return this
}
   PhotoComment(data){
   const photocom= cy.get('#phototext')
   photocom.type(data)
   return this
}
   Clickupload(){
    const clicku=cy.get('#image-upload-button')
    clicku.click()
    cy.get('#imageUploadBtn').click()
    cy.get('#noOfLikesLinknew').click()
    return this
}
   ImageComment(datat){
       const icomment=cy.get('#formCreateComment_listId2 > .commentBox')
       icomment.type(datat)
       cy.get('#formCreateComment_listId2 > .commentSubmitBtn').click()
   }
   ClickShareVideo(){
    const share=cy.get('#video-tab-label')
    share.click()
    return this
 } 
   UploadURL(){
     const uploadurl=cy.get('#createVideo_content')
     cy.type(uploadurl)
     cy.get('#btnSaveVideo_https\:\/\/www\.youtube\.com\/embed\/3tpVVY5OP3g\?rel\=0').click()
     return this
 }
 clickUpcomimgAnniversaries(){
    cy.get('#rightBarHeadingAnniv').click()

 }
 clickmostlikedposts(){
    cy.get('#rightBarHeadingMl').click()
 }
 clickMostCommentedPosts(){
    cy.get('#rightBarHeadingMc').click()
 }
   
}
export default Buzz