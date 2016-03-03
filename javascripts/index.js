var model = avalon.define({
    $id: "test",
    url: "Template1",
    name: "司徒正美",
    password: '12345678',
    array: [1, 2, 3, 4, 5, 6, 7],
    add: function(e) {
        if (this.value && e.which == 13) {//this为input元素
            var a = this.value
            model.array.push(a)
            this.value = "";
        }
    }
})
avalon.scan();