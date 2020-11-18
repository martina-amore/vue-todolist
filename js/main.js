const root = new Vue({
    el: "#root",
    data: {
        itemUtente: "",
        itemLista: [],
        isClicked: false,
    },
    methods: {
        addItem: function() {
            this.itemLista.push(this.itemUtente);
        },
        removeItem: function(cancelIndex){
			this.itemLista.splice(cancelIndex, 1);
		},
        changeColor: function(){
            this.isClicked = !this.isClicked;
		}
    }
})
