import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSubjectProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSubject["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSubject["size"];
}
interface RuxIconSubjectEvents {
}
interface RuxIconSubjectSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSubject extends SvelteComponent {
    $$prop_def: RuxIconSubjectProps;
    $$events_def: RuxIconSubjectEvents;
    $$slot_def: RuxIconSubjectSlots;
    $on<K extends keyof RuxIconSubjectEvents>(type: K, callback: (e: RuxIconSubjectEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSubjectProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSubjectElement | undefined;
}
export default RuxIconSubject;
