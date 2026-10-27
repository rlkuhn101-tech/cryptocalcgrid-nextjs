import type {MetadataRoute} from 'next';import {tools} from '../lib/calculators';
export default function sitemap():MetadataRoute.Sitemap{return [{url:'https://cryptocalcgrid.com/'},...tools.map(t=>({url:`https://cryptocalcgrid.com/calculators/${t.slug}`}))];}
