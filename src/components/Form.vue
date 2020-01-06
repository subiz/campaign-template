<template>
	<div class="form">
		<div  v-for="field in form.fields">
			<div v-if="field.type==='list' && !field.multiple_choice" class="form--list-container">
				<label class="label">{{field.label}}</label>
				<div class="radio" v-for="item in field.list">
					<input type="radio" :id="field.key + item" :name="field.key" :value="item"
								 @change="ev => onRadioChange(ev, field, item)"
					/>
					<label class="radio--label" :for="field.key + item" >
						{{item}}
					</label>
					<div class="radio--check"><div class="inside"></div></div>
				</div>
			</div>

			<div v-if="field.type==='list' && field.multiple_choice" class="form--list-container">
				<label class="label">{{field.label}}</label>

				<div class="checkbox" v-for="item in field.list">
					<input
						type="checkbox"
									:id="field.key + item"
									@change="ev => onCheckboxChange(ev, field, item)"
									:checked="contains(field, item) "/>
					<label class="checkbox--label" :for="field.key + item">{{item}}</label>
					<div class="checkbox--check">
						<div></div>
					</div>
				</div>
			</div>





			<input v-if="field.type==='datetime'" type="date" class="form-control" @change="ev => onDatetimeFieldChange(ev, field)" value="toDate(field.value)" />

			<input v-if="field.type==='text' && !field.subtype==='email'" type="email" class="text-input" :placeholder="field.placeholder" @keyup="ev => onTextFieldChange(ev, field)" />

			<textarea v-if="field.type==='text' && field.multiline_text" class="text-input" :placeholder="field.placeholder" @keyup="ev => onTextFieldChange(ev, field)" />

			<input v-if="field.type==='text' && !field.multiline_text" type="text" class="text-input" :placeholder="field.placeholder" @keyup="ev => onTextFieldChange(ev, field)" />

			<input v-if="field.type==='number'" type="number" class="text-input" :placeholder="field.placeholder" @keyup="ev => onTextFieldChange(ev, field)" />

			<div v-if="field.type==='boolean'">
				<label class="checkbox--label">
					{{field.label}}
					<input type="checkbox" @change="ev => onBooleanFieldChange(ev, field)" :checked="field.value" />
					<span class="checkmark">
						<svg
							width="14"
							height="10"
							viewBox="0 0 8 6"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.33317 0.5L2.74984 5.08333L0.666504 3"
									 stroke="white"
									 stroke-linecap="round"
									 stroke-linejoin="round"
							></path>
						</svg>
					</span>
				</label>
			</div>

		</div>
	</div>
</template>

<script>
 export default {
	 name:'jform',
	 props: ["form"],

	 methods: {
		 onRadioChange(ev, field, item) {
			 var v = []
			 if (ev.target.checked) {
				 v = [item]
			 }
			 this.$set(field, 'value', JSON.stringify(v))
		 },

		 onCheckboxChange(ev, field, item) {
			 var v = []
			 try {
				 v = JSON.parse(field.value)
			 } catch(e) {}

			 if (!Array.isArray(v)) v = []

			 if (ev.target.checked) {
				 if (!v.includes(item)) v.push(item)
			 } else {
				 v = v.filter(i => i !== item)
			 }
			 this.$set(field, 'value', JSON.stringify(v))
		 },
		 contains(field, item) {
			 var v = []
			 try {
				 v = JSON.parse(field.value)
			 } catch(e) {}

			 if (!Array.isArray(v)) v = []
			 return v.includes(item)
			 return false
		 },
		 onTextFieldChange(ev, field) {
			 field.value = ev.target.value
		 },

		 onBooleanFieldChange(ev, field) {
			 field.value = ev.target.checked
		 },
		 onDatetimeFieldChange(ev, field) {
			 field.value = new Date(ev.target.value)
		 },
	 },

 }
</script>
<style>
 .radio {
	 display: block;
	 position: relative;
	 width: 100%;
	 height: 25px;
	 margin-top: 5px;
 }


 input[type=radio]{
	 position: absolute;
	 visibility: hidden;
 }

 .radio--label{
	 padding-left: 22px;
	 display: block;
	 position: relative;
	 z-index: 9;
	 cursor: pointer;
 }

 .radio--check{
	 display: block;
	 position: absolute;
	 border: 1px solid #aaa;
	 border-radius: 100%;
	 height: 16px;
	 width: 16px;
	 top: 0px;
	 left: 0px;
	 z-index: 5;
	 transition: border .15s linear;
	 -webkit-transition: border .15s linear;
 }

 .radio--check:hover {
	 border: 1px solid #888;
 }

 .radio--check::before {
	 display: block;
	 position: absolute;
	 content: '';
	 border-radius: 100%;
	 height: 10px;
	 width: 10px;
	 top: 2px;
	 left: 2px;
	 margin: auto;
	 transition: background 0.15s linear;
	 -webkit-transition: background 0.15s linear;
 }

 input[type=radio]:checked ~ .radio--check {
	 border: 1px solid #0265ff;
 }

 input[type=radio]:checked ~ .radio--check::before {
	 background: #0265ff;
 }

 .checkbox {
	 display: block;
	 position: relative;
	 width: 100%;
	 height: 25px;
 }

 input[type=checkbox] {
	 position: absolute;
	 visibility: hidden;
 }

 .checkbox--label {
	 padding-left: 22px;
	 display: block;
	 position: relative;
	 z-index: 9;
	 cursor: pointer;
 }

 .checkbox--check {
	 display: block;
	 position: absolute;
	 border: 1px solid #aaa;
	 border-radius: 4 px;
	 height: 16px;
	 width: 16px;
	 top: 0px;
	 left: 0px;
	 z-index: 5;
	 transition: border .15s linear;
	 -webkit-transition: border .15s linear;
 }

 .checkbox--check:hover {
	 border: 1px solid #888;
 }

 .checkbox--check::before {
	 display: block;
	 position: absolute;
	 content: '';
	 height: 100%;
	 width: 100%;
	 margin: auto;
	 transition: background 0.15s linear;
	 -webkit-transition: background .15s linear;
 }

 input[type=checkbox]:checked ~ .checkbox--check {
	 border: 1px solid #0265ff;
 }

 input[type=checkbox]:checked ~ .checkbox--check::before {
	 background: #0265ff;
 }

 .form--list-container {
	 margin-top: 15px;
 }


</style>
