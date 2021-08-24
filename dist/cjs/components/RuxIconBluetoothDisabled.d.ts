import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBluetoothDisabledProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBluetoothDisabled["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBluetoothDisabled["size"];
}
interface RuxIconBluetoothDisabledEvents {
}
interface RuxIconBluetoothDisabledSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBluetoothDisabled extends SvelteComponent {
    $$prop_def: RuxIconBluetoothDisabledProps;
    $$events_def: RuxIconBluetoothDisabledEvents;
    $$slot_def: RuxIconBluetoothDisabledSlots;
    $on<K extends keyof RuxIconBluetoothDisabledEvents>(type: K, callback: (e: RuxIconBluetoothDisabledEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBluetoothDisabledProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBluetoothDisabledElement | undefined;
}
export default RuxIconBluetoothDisabled;
