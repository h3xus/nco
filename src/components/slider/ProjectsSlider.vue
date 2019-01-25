<template>
    <div id="slideshow">
        <div class="double-column">  
            <div class="left-column">      
                <a :href="slider[current].url" target="_blank">
                        <div class="avatar center"><span>{{slider[current].projects_tab_project_company}}</span></div>
                </a>
            </div>
            <div class="right-column">
                <div class="text-content text-center">
                            <p>{{slider[current].projects_tab_project_claim}}</p>
                            <p>{{slider[current].projects_tab_project_testemonial}}</p>
                            <p>{{slider[current].projects_tab_project_details}}</p>
                            <a :href="slider[current].url" target="_blank">
                                <p>{{slider[current].projects_tab_project_person}}</p>
                            </a>
                            <a :href="slider[current].url" target="_blank">
                                <p>{{slider[current].projects_tab_project_company}}</p>
                            </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
     data() {
        return {
            name: "ProjectSlider",
            
        }
    },   
    methods:{
        currentContent: function(){
          return this.slider[this.current]  
        } 
            
    },
    props: [
        'slider',
        'current'
    ]
}
</script>


<style lang="scss">
#slideshow {
  display: grid;
  justify-content:center;
  align-items: center;
  .avatar{
    margin: 2em 1em;
    width: 4em;
    height: 4em;
    border-radius: 4em;
    border: 1px solid #ccc;
    overflow: hidden;

  }
}
</style>
