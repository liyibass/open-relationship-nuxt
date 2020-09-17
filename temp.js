async fetchAllPpls() {
    try {
      var result = await axios({
        method: "POST",
        url: "http://localhost:3000/admin/api",
        data: {
          query: `
                          {
                              allPpls {
                                  name,
                                  alternative_name
                              }
                          }
                      `,
        },
      });
      console.log(result);
      // this.people = result.data.data.people;
    } catch (error) {
      console.error(error);
    }
  }