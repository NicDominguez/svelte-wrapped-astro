import { Components } from '@astrouxds/astro-web-components';
interface RuxIconChromeReaderModeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconChromeReaderMode["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconChromeReaderMode["size"];
}
interface RuxIconChromeReaderModeEvents {
}
interface RuxIconChromeReaderModeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconChromeReaderMode extends SvelteComponent {
    $$prop_def: RuxIconChromeReaderModeProps;
    $$events_def: RuxIconChromeReaderModeEvents;
    $$slot_def: RuxIconChromeReaderModeSlots;
    $on<K extends keyof RuxIconChromeReaderModeEvents>(type: K, callback: (e: RuxIconChromeReaderModeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconChromeReaderModeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconChromeReaderModeElement | undefined;
}
export default RuxIconChromeReaderMode;
