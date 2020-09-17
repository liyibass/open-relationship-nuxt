export const ADD_PPL = `
mutation createPpl($name: String!,$alternative_name:String,$former_name:String,,$email:String,$gender:String,
  ) {
    createPpl(data: {name:$name,alternative_name:$alternative_name,former_name:$former_name,email,:$email,gender:$gender,
    }) {
          name
          alternative_name
          former_name
          identifiers
          email
          gender
          
         
  }
}
`;
// $birth_date:String,$death_date:String,$image:String,$summary:String,$biography:String,$national_identity:String,
// birth_date:$birth_date,death_date:$death_date,image:$image,summary:$summary,biography:$biography,national_identity:$national_identity

// death_date
// image
// summary
// biography
// national_identity
