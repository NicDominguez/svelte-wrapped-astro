import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDesktopAccessDisabledProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDesktopAccessDisabled["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDesktopAccessDisabled["size"];
}
interface RuxIconDesktopAccessDisabledEvents {
}
interface RuxIconDesktopAccessDisabledSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDesktopAccessDisabled extends SvelteComponent {
    $$prop_def: RuxIconDesktopAccessDisabledProps;
    $$events_def: RuxIconDesktopAccessDisabledEvents;
    $$slot_def: RuxIconDesktopAccessDisabledSlots;
    $on<K extends keyof RuxIconDesktopAccessDisabledEvents>(type: K, callback: (e: RuxIconDesktopAccessDisabledEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDesktopAccessDisabledProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDesktopAccessDisabledElement | undefined;
}
export default RuxIconDesktopAccessDisabled;
