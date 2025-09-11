export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      alumni: {
        Row: {
          college_name: string
          company: string | null
          course_name: string
          created_at: string
          current_position: string | null
          graduation_year: number | null
          id: string
          location: string | null
          name: string
          photo_url: string | null
          success_story: string | null
        }
        Insert: {
          college_name: string
          company?: string | null
          course_name: string
          created_at?: string
          current_position?: string | null
          graduation_year?: number | null
          id?: string
          location?: string | null
          name: string
          photo_url?: string | null
          success_story?: string | null
        }
        Update: {
          college_name?: string
          company?: string | null
          course_name?: string
          created_at?: string
          current_position?: string | null
          graduation_year?: number | null
          id?: string
          location?: string | null
          name?: string
          photo_url?: string | null
          success_story?: string | null
        }
        Relationships: []
      }
      assessments: {
        Row: {
          budget_range: string | null
          career_preferences: string[]
          completed_at: string
          grades: Json
          id: string
          interests: string[]
          preferred_location: string | null
          skills: string[]
          user_id: string
        }
        Insert: {
          budget_range?: string | null
          career_preferences: string[]
          completed_at?: string
          grades: Json
          id?: string
          interests: string[]
          preferred_location?: string | null
          skills: string[]
          user_id: string
        }
        Update: {
          budget_range?: string | null
          career_preferences?: string[]
          completed_at?: string
          grades?: Json
          id?: string
          interests?: string[]
          preferred_location?: string | null
          skills?: string[]
          user_id?: string
        }
        Relationships: []
      }
      course_recommendations: {
        Row: {
          course_id: string
          created_at: string
          id: string
          match_score: number | null
          reasons: string[] | null
          user_id: string
        }
        Insert: {
          course_id: string
          created_at?: string
          id?: string
          match_score?: number | null
          reasons?: string[] | null
          user_id: string
        }
        Update: {
          course_id?: string
          created_at?: string
          id?: string
          match_score?: number | null
          reasons?: string[] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_recommendations_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          avg_fees: number | null
          career_prospects: string[] | null
          category: string
          colleges: string[] | null
          created_at: string
          description: string | null
          duration: string | null
          eligibility: string | null
          id: string
          is_government: boolean | null
          location: string | null
          name: string
          skills_developed: string[] | null
        }
        Insert: {
          avg_fees?: number | null
          career_prospects?: string[] | null
          category: string
          colleges?: string[] | null
          created_at?: string
          description?: string | null
          duration?: string | null
          eligibility?: string | null
          id?: string
          is_government?: boolean | null
          location?: string | null
          name: string
          skills_developed?: string[] | null
        }
        Update: {
          avg_fees?: number | null
          career_prospects?: string[] | null
          category?: string
          colleges?: string[] | null
          created_at?: string
          description?: string | null
          duration?: string | null
          eligibility?: string | null
          id?: string
          is_government?: boolean | null
          location?: string | null
          name?: string
          skills_developed?: string[] | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          education_level: string | null
          email: string | null
          full_name: string
          id: string
          location: string | null
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          education_level?: string | null
          email?: string | null
          full_name: string
          id?: string
          location?: string | null
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          education_level?: string | null
          email?: string | null
          full_name?: string
          id?: string
          location?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
