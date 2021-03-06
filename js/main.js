;(function(){

	let sticky = false

	$(window).scroll(()=>{
		const inBottom =isInBottom()

		if(inBottom && !sticky){
			//Cambiar la navegacion
			
			sticky = true
			stickNavigation()

		}else if (!inBottom && sticky){
			
			sticky =false
			unStickNavigation()
		}

	})

	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").addClass("hidden")
		$("#sticky-navigation").removeClass("hidden")
	}

	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").removeClass("hidden")
		$("#sticky-navigation").addClass("hidden")
	}

	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height - descriptionHeight * 1.5
	}

})()