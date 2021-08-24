import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAlarmProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAlarm["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAlarm["size"];
}
interface RuxIconAlarmEvents {
}
interface RuxIconAlarmSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAlarm extends SvelteComponent {
    $$prop_def: RuxIconAlarmProps;
    $$events_def: RuxIconAlarmEvents;
    $$slot_def: RuxIconAlarmSlots;
    $on<K extends keyof RuxIconAlarmEvents>(type: K, callback: (e: RuxIconAlarmEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAlarmProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAlarmElement | undefined;
}
export default RuxIconAlarm;
