import * as observable from "data/observable";
import * as stackLayout from "ui/layouts/stack-layout";
import * as label from "ui/label";
import * as button from "ui/button";

export class CodeOnlyControl extends stackLayout.StackLayout {
    constructor() {
        super();

        var counter: number = 0;

        var lbl = new label.Label();
        var btn = new button.Button();
        btn.text = "Tap me!";
        btn.on(button.Button.tapEvent, (args: observable.EventData) => {
            lbl.text = "Tap " + counter++;
        });

        this.addChild(lbl);
        this.addChild(btn);
    }
}

