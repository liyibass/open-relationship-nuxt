export const ADD_PPL = `
mutation createPpl( $name: String!,
                    $alternative_name:String,
                    $former_name:String,
                    $gender:String,
                    $email:String,
                    $birth_date:DateTime,
                    $death_date:DateTime,
                    $summary:String
                    $biography:String
                    $national_identity:String
             
  ) {
    createPpl(data: { name:$name,
                      alternative_name:$alternative_name,
                      former_name:$former_name,
                      gender:$gender,
                      email,:$email,
                      birth_date:$birth_date
                      death_date:$death_date
                      summary:$summary
                      biography:$biography
                      national_identity:$national_identity
                
    }) {
          name
          alternative_name
          former_name
          gender
          email
          birth_date
          death_date
          summary
          biography
          national_identity

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

export const ADD_ORGANIZATION = `
mutation createOrganization(  $name: String!,
                              $alternative_name:String,
                              $identifiers:String
                              $classification:String,
                             
                              $abstract:String,
                              $description:String,
                              $founding_date:DateTime,
                              $dissolution_date:DateTime,
                              $image:String,
                              $contact_details:String,
                              $links:String,
                              $speeches:String,


) {
  createOrganization(data: {  name:$name,
                              alternative_name:$alternative_name,
                              identifiers:$identifiers
                              classification:$classification,
                             
                              abstract:$abstract,
                              description:$description,
                              founding_date:$founding_date,
                              dissolution_date:$dissolution_date,
                              image:$image,
                              contact_details:$contact_details,
                              links:$links,
                              speeches:$speeches,

}) {
          name
          alternative_name
          identifiers
          classification
         
          abstract
          description
          founding_date
          dissolution_date
          image
          contact_details
          links
          speeches
  }
}
`;
// $parent:String,
// $children:String,
