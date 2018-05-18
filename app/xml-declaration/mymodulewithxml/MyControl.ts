import * as observable from "data/observable";
import * as view from "ui/core/view";
import * as label from "ui/label";

var count = 0;
export function buttonTap(args: observable.EventData) {
    count++;

    var parent = (<view.View>args.object).parent;
    if (parent) {
        var lbl = <label.Label>view.getViewById(parent, "Label1");
        if (lbl) {
            lbl.text = "You tapped " + count + " times!";
        }
    }
}
