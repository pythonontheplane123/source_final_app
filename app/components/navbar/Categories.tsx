'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';

import chatgpt from '../../../public/chatgpt.svg';
import huggingface from '../../../public/huggingface.svg';
import cohere from '../../../public/cohere.svg';
import azure from '../../../public/azure.svg';
import vertexai from '../../../public/vertexai.svg';
import supabase from '../../../public/supabase.svg';
import brain from '../../../public/brain.svg';
import qdrant from '../../../public/qdrant.svg';
import replicate from '../../../public/replicate.svg';
import weaviate from '../../../public/weaviate.svg';
import pinecone from '../../../public/pinecone.svg';
import autogpt from '../../../public/autogpt.svg';
import babyagi from '../../../public/babyagi.svg';
import chroma from '../../../public/chroma.svg';
import chatlocalai from '../../../public/chatlocalai.svg';

import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'OpenAI',
    icon: chatgpt,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Azure AI',
    icon: azure,
    description: 'This property is has windmills!',
  },
  {
    label: 'Cohere',
    icon: cohere,
    description: 'This property is modern!'
  },
  {
    label: 'Huggingface',
    icon: huggingface,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Vertex AI',
    icon: vertexai,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Replicate',
    icon: replicate,
    description: 'This is on an island!'
  },
  {
    label: 'LocalAI',
    icon: chatlocalai,
    description: 'This property is near a lake!'
  },
  {
    label: 'Custom',
    icon: brain,
    description: 'This property has skiing activies!'
  },
  {
    label: 'AutoGPT',
    icon: autogpt,
    description: 'This property is an ancient castle!'
  },
  {
    label: 'BabyAGI',
    icon: babyagi,
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'ChromaDB',
    icon: chroma,
    description: 'This property offers camping activities!'
  },
  {
    label: 'SupabaseVB',
    icon: supabase,
    description: 'This property is in arctic environment!'
  },
  {
    label: 'Weaviate',
    icon: weaviate,
    description: 'This property is in the desert!'
  },
  {
    label: 'Qdrant',
    icon: qdrant,
    description: 'This property is in a barn!'
  },
  {
    label: 'Pinecone',
    icon: pinecone,
    description: 'This property is brand new and luxurious!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;