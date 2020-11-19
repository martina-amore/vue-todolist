const root = new Vue({
    el: "#root",
    data: {
        itemUtente: "",
        itemLista: [],
        isClicked: true,
    },
    methods: {
        addItem: function() {
            this.itemLista.push(this.itemUtente);
            this.itemUtente = "";
        },
        removeItem: function(cancelIndex){
			this.itemLista.splice(cancelIndex, 1);
		},
        changeColor: function(index){
            console.log(this.isClicked);
            this.isClicked = !this.isClicked;
		},
        display: function() {
            if (this.itemLista.length === 0) {
                return false;
            }
            else {
                return true;
            }
        }
    }
})
