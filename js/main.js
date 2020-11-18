const root = new Vue({
    el: "#root",
    data: {
        itemUtente: "",
        itemLista: [],
        isRed: false,
    },
    methods: {
        addItem: function() {
            this.itemLista.push(this.itemUtente);
        },
        removeItem: function(cancelIndex){
			this.itemLista.splice(cancelIndex, 1);
		},
        isClicked: function(){
			if (this.isRed == true) {
                return false;
            }
            else {
                return true;
            }
		}
    }
})
