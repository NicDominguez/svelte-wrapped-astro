import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDesktopWindowsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDesktopWindows["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDesktopWindows["size"];
}
interface RuxIconDesktopWindowsEvents {
}
interface RuxIconDesktopWindowsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDesktopWindows extends SvelteComponent {
    $$prop_def: RuxIconDesktopWindowsProps;
    $$events_def: RuxIconDesktopWindowsEvents;
    $$slot_def: RuxIconDesktopWindowsSlots;
    $on<K extends keyof RuxIconDesktopWindowsEvents>(type: K, callback: (e: RuxIconDesktopWindowsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDesktopWindowsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDesktopWindowsElement | undefined;
}
export default RuxIconDesktopWindows;
