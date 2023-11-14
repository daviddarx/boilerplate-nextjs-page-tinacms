type Props = {
  title: string;
  lead: string;
};

export default function PageHeader({ title, lead }: Props) {
  return (
    <div className='flex flex-col gap-4'>
      <h1>{title}</h1>
      <p>{lead}</p>
    </div>
  );
}
