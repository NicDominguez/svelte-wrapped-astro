import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhoneBluetoothSpeakerProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhoneBluetoothSpeaker["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhoneBluetoothSpeaker["size"];
}
interface RuxIconPhoneBluetoothSpeakerEvents {
}
interface RuxIconPhoneBluetoothSpeakerSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhoneBluetoothSpeaker extends SvelteComponent {
    $$prop_def: RuxIconPhoneBluetoothSpeakerProps;
    $$events_def: RuxIconPhoneBluetoothSpeakerEvents;
    $$slot_def: RuxIconPhoneBluetoothSpeakerSlots;
    $on<K extends keyof RuxIconPhoneBluetoothSpeakerEvents>(type: K, callback: (e: RuxIconPhoneBluetoothSpeakerEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhoneBluetoothSpeakerProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhoneBluetoothSpeakerElement | undefined;
}
export default RuxIconPhoneBluetoothSpeaker;
