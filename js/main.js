const root = new Vue({
    el: "#root",
    data: {
        itemUtente: "",
        itemLista: [],
        isClicked: []
    },
    methods: {
        addItem: function() {
            this.itemLista.push(this.itemUtente);
            this.itemUtente = "";
            this.isClicked.push(false);
        },
        removeItem: function(cancelIndex){
			this.itemLista.splice(cancelIndex, 1);
            this.isClicked.splice(cancelIndex, 1);
		},
        changeColor: function(index){
            console.log(this.isClicked);
            Vue.set(this.isClicked, index, !this.isClicked[index]);
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
