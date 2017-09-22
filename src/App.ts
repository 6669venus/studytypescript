namespace Venus {
    export class Boot {
        public create() {
            console.log("boot/create");
        }
    }
}

let v = new Venus.Boot();
v.create();