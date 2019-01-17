// import HeaderComponent from '../../components/shared/Header.vue'
import Slick from 'vue-slick'

export default {
  data() {
    return {
        name: "Previous-projects",
        items: [
          {          
            person: '$t("message.projects_tab_project1_person")',
            company: '$t("message.projects_tab_project1_company")',
            testi: '$t("message.projects_tab_project1_testemonial")',
            claim: '$t("message.projects_tab_project1_claim")',
            details: '$t("message.projects_tab_project1_details")'
          }
        ],
        foo: {
          bar: "baz"
          }
        }
  },
  components: {
    // HeaderComponent,
    Slick
  }
}