import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBallotProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBallot["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBallot["size"];
}
interface RuxIconBallotEvents {
}
interface RuxIconBallotSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBallot extends SvelteComponent {
    $$prop_def: RuxIconBallotProps;
    $$events_def: RuxIconBallotEvents;
    $$slot_def: RuxIconBallotSlots;
    $on<K extends keyof RuxIconBallotEvents>(type: K, callback: (e: RuxIconBallotEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBallotProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBallotElement | undefined;
}
export default RuxIconBallot;
