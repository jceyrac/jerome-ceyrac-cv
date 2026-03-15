import { useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export interface CVData {
  hero: string;
  about: string;
  experience: string;
  skills: string;
  certifications: string;
  education: string;
  projects: string;
  contact: string;
}

export function useCVData() {
  const { actor, isFetching } = useActor();

  return useQuery<CVData>({
    queryKey: ["cv-data"],
    queryFn: async () => {
      if (!actor) {
        return {
          hero: "",
          about: "",
          experience: "",
          skills: "",
          certifications: "",
          education: "",
          projects: "",
          contact: "",
        };
      }
      const [
        hero,
        about,
        experience,
        skills,
        certifications,
        education,
        projects,
        contact,
      ] = await Promise.all([
        actor.getHero(),
        actor.getAbout(),
        actor.getExperience(),
        actor.getSkills(),
        actor.getCertifications(),
        actor.getEducation(),
        actor.getProjects(),
        actor.getContact(),
      ]);
      return {
        hero,
        about,
        experience,
        skills,
        certifications,
        education,
        projects,
        contact,
      };
    },
    enabled: !!actor && !isFetching,
  });
}
