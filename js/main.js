const root = new Vue({
    el: "#root",
    data: {
        itemUtente: "",
        itemLista: []
    },
    methods: {
        addItem: function() {
            this.itemLista.push(
                {
                  text: this.itemUtente,
                  colored: false
            });
            this.itemUtente = "";
        },
        removeItem: function(cancelIndex){
			this.itemLista.splice(cancelIndex, 1);
		},
        changeColor: function(index){
            this.itemLista[index].colored = !this.itemLista[index].colored;
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
