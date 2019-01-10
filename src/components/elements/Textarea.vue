<template>
    <div class="material-form-field">
        <textarea name="" id=""></textarea>
        <label class="material-form-field-label">{{buttonName}}</label>
    </div>
</template>

<script>

export default {
    name: "MaterialTextarea",
    data() {
        return {
            message: {}        
        }
    },
    props: {
        buttonName: {
            type: String,         
        },
        buttonFunc: {

        }
    }
}

</script>

<style lang="scss" scoped>
// 😂
// Influenced heavily by: https://codepen.io/sevilayha/pen/IdGKH

$material-form-label: #fff;
$material-form-label-focus: #3f51b5;
$material-form-line: #fff;
$material-form-line-focus: $material-form-label-focus;
$material-form-input-text: $material-form-label;
$material-form-input-text-focus: $material-form-label-focus;
$material-form-field-invalid-foreground: #d50000;

$material-dropdown-hoverBackground: #e8eaf6;
$material-dropdown-selectedBackground: #9fa8da;
$material-labelOffset: 0px;
$material-textInputPaddingTopBottom: 5px;


.material-form-field{
  font-size:14px;
  position:relative;
  display:block;
  color:$material-form-label;
  padding:$material-labelOffset 0 10px 0;
  &::after{
    content:"\00A0";
    display:block;
    color: $material-form-field-invalid-foreground;
    font-size:12px;
    padding-top:5px;}
  .material-form-field-label{
    position:absolute;
    display:block;
    color: $material-form-label;
    top: $material-labelOffset + $material-textInputPaddingTopBottom;
    left: 0px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
    pointer-events:none;
    cursor:text;}
  textarea{
    padding:$material-textInputPaddingTopBottom 0 $material-textInputPaddingTopBottom 0;
    display:block;
    width:100%;
    border:none;
    font-size:14px;
    color:$material-form-input-text;
    border-bottom:1px solid $material-form-line;
    outline:none;
    background: transparent;
    &:invalid{
      outline:none;
      box-shadow: none;}
    &:valid, &:focus {
      & ~ .material-form-field-label {
        top: $material-labelOffset - ($material-textInputPaddingTopBottom + 5);
        font-size:12px;}
    }
    &:focus {
      outline:none;
      color:$material-form-input-text-focus;
      padding-bottom: $material-textInputPaddingTopBottom - 2;
      border-bottom-width:3px;
      border-bottom-color:$material-form-line-focus;
      & ~ .material-form-field-label {
        color:$material-form-label-focus;
      }
      & ~ .material-dropdown {
        /*
        If you want to animate this you will need to use some js to calculate it
        Optionally, you can simply display:block/none 
        */
        height:228px; 
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
        transition:0.2s ease-out height, step-start box-shadow 0.2s;
        -moz-transition:0.2s ease-out height, step-start box-shadow 0.2s;
        -webkit-transition:0.2s ease-out height, step-start box-shadow 0.2s;}
    }
  }
  &.material-form-field-invalid {
    color: $material-form-field-invalid-foreground;
    &::after{
      content:attr(data-validationError);}
    input:focus ~ .material-form-field-label{
      color: $material-form-field-invalid-foreground;}
  }
}
</style>