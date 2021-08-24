import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddAlarmProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAddAlarm["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAddAlarm["size"];
}
interface RuxIconAddAlarmEvents {
}
interface RuxIconAddAlarmSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAddAlarm extends SvelteComponent {
    $$prop_def: RuxIconAddAlarmProps;
    $$events_def: RuxIconAddAlarmEvents;
    $$slot_def: RuxIconAddAlarmSlots;
    $on<K extends keyof RuxIconAddAlarmEvents>(type: K, callback: (e: RuxIconAddAlarmEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddAlarmProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddAlarmElement | undefined;
}
export default RuxIconAddAlarm;
