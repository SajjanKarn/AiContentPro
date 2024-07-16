import Templates from "@/app/(data)/Templates";

const returnIcon = (slug: string) => {
  const template = Templates.find((template) => template.slug === slug);
  if (!template) return null;

  return { icon: template.icon, name: template.name };
};

export default returnIcon;
